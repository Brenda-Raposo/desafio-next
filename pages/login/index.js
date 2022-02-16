import { Input, Container, Area, Button, DivInput } from "../../styles/styled";
import {  FaUserAlt  } from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';

const Login = ()=>{
    return (
    <Container>
        <Area>
            <h1>Login</h1>
            <DivInput>
                <FaUserAlt  size={25} color={'#a4a4a4'}/>
                <Input type="email" required placeholder="E-mail"/>
            </DivInput>

            <DivInput>
                <RiLockPasswordFill size={25} color={'#a4a4a4'}/>
                <Input type="password" required placeholder="Senha"/>
            </DivInput>

            <Button>Entrar</Button>
        </Area>
    </Container>
    );
}

export default Login;