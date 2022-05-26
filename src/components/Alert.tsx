import {
    Alert as ChakraAlert,
    AlertIcon
} from '@chakra-ui/react'



export const Alert = ({ style, options, message, close }) => (
    <ChakraAlert
        status={options?.type}
        right={8}
        bottom={4}
        borderRadius={8}
        style={style}>
        <AlertIcon />
        {message}
    </ChakraAlert>

)