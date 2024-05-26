import './index.scss'
import { Spinner } from '@chakra-ui/react'

export default function Loader() {
    return (
        <div className="loader">
            <Spinner thickness="5px" size="xl" speed="0.65s" color="blue.500" />
        </div>
    )
}
