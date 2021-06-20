import styled from "styled-components";
import Head from "next/head";
import { Button } from "@material-ui/core"
import { auth, provider } from "../firebase";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <div>
            <Container>
                <Head>
                    <title>Login</title>
                    <link rel="icon" href="/message.png" />
                </Head>

                <LoginContainer>
                    <Logo src="https://img.icons8.com/color/96/000000/chat--v1.png"/>
                    <Button onClick={signIn}>Sign in with Google</Button>
                </LoginContainer>
            </Container>
        </div>
    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    padding: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
`;