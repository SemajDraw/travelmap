import { ReactNode, useEffect } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu as ChakraMenu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Center,
    Heading,
} from '@chakra-ui/react';
import { DarkModeSwitch } from './DarkModeSwitch';
import { useSession, signIn, signOut } from "next-auth/react"
import { useAlert } from 'react-alert'

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

const Menu = ({ session }) => (
    <ChakraMenu>
        <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
            <Avatar
                size={'sm'}
                src={session?.user?.image || 'https://avatars.dicebear.com/api/male/username.svg'}
            />
        </MenuButton>
        <MenuList color={useColorModeValue('gray.700', 'gray.200')} alignItems={'center'}>
            <br />
            <Center>
                <Avatar
                    size={'2xl'}
                    src={session?.user?.image || 'https://avatars.dicebear.com/api/male/username.svg'}
                />
            </Center>
            <br />
            <Center>
                <p>{session?.user?.name}</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem onClick={() => signOut()}>Logout</MenuItem>
        </MenuList>
    </ChakraMenu>
)

export const Navbar = () => {
    const { data: session } = useSession()
    const alert = useAlert()

    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            alert.info('Please log in to view pictures')
        }
    }, [session]);

    return (
        <Box bg={'gray.700'} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} color={'gray.200'}>
                <Flex
                    bgGradient="linear(to-l, #e3a7f9, #fbec8f)"
                    bgClip="text"
                    display="inline-block"
                >
                    <Heading display="inline-block" size="lg">Travelmap</Heading>
                </Flex>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <DarkModeSwitch />

                        {session ? <Menu session={session} /> :
                            <Button
                                colorScheme='telegram'
                                onClick={() => signIn()}
                            >Sign in</Button>
                        }

                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}
