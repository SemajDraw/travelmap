import dynamic from 'next/dynamic'
import axios from 'axios';
import useSWR from 'swr';
import { Flex, Text } from "@chakra-ui/react"
import { Loader } from './Loader';

const fetcher = url => axios.get(url).then(res => res.data);

const Map = dynamic(
    () => import('../components/Map'),
    { ssr: false }
)

export const MapContainer = () => {

    const { data, error } = useSWR('/api/photos', fetcher);
    console.log('data', data)
    console.log('error', error)

    if (error) return <Text>Could not load photos...</Text>
    if (!data) return <Loader />

    return (
        <Flex>
            <Map />
        </Flex>
    )
}