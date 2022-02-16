import React from "react";
import { Container, Area, Button, Input, DivInput } from "../../styles/styled";
import {  FaUserAlt  } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';

const Cadastro = ()=> {
    return (
        <Container>
            <Area>
                <h1>Cadastro</h1>
                <DivInput>
                    <FaUserAlt  size={25} color={'#a4a4a4'}/>
                    <Input type="name" required placeholder="Nome" />
                </DivInput>

                <DivInput>
                    <MdOutlineAlternateEmail size={25} color={'#a4a4a4'}/>
                    <Input type="email" required placeholder="E-mail"/>
                </DivInput>

                <DivInput>
                    <RiLockPasswordFill size={25} color={'#a4a4a4'}/>
                    <Input type="password" required placeholder="Crie uma senha"/>
                </DivInput>

                <div>
                    <Input type="checkbox" style={{position:'relative', right:170}} />
                </div>

                <Button>Cadastre-se</Button>


            </Area>
        </Container>
    );
}
export default Cadastro;