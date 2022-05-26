import dynamic from 'next/dynamic'
import axios from 'axios';
import useSWR from 'swr';
import { Flex } from "@chakra-ui/react"
import { Loader } from './Loader';
import { useAlert } from 'react-alert'
import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';

const fetcher = url => axios.get(url).then(res => res.data);

const Map = dynamic(
    () => import('../components/Map'),
    { ssr: false }
)

export const MapContainer = () => {

    const alert = useAlert()
    const { data, error } = useSWR('/api/photos/google', fetcher);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') alert.info('Please log in to view pictures');
    }, [status])

    console.log('session', session)
    console.log('data', data)
    console.log('error', error)

    if (error) {
        if (status === 'authenticated' && error.response.status === 401) {
            signOut()
        }
        else if ((status !== 'unauthenticated') && error) {
            alert.error('There was an issue retrieving the photos')
        }
    }


    if (!data) return <Loader />;

    return (
        <Flex style={{ zIndex: 0 }}>
            <Map />
        </Flex>
    )
}