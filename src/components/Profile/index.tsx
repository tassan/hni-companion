import React from 'react';
import {useUser} from '@auth0/nextjs-auth0/client';
import {Avatar, Button} from "antd";
import {LoggedInUserContainer, LoginCallToAction, LoginContainer, LogoutContainer} from "@/components/Profile/styles";
import {useRouter} from "next/router";
import {LogoutOutlined} from "@ant-design/icons";


export default function Profile() {
    const {user, error, isLoading} = useUser();
    let router = useRouter();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    const userName = user?.name ? `olá, ${user?.name}` : "deveria ser o seu nome aqui, mas você não colabora!";
    const userAvatar = user?.picture || "https://i.pinimg.com/474x/e3/43/33/e34333e13adc23bd7323c8b34a7f69b8.jpg";

    const handleAvatarClick = () => {
        router.push("/profile");
    }


    const LoginButton = () => {
        return (
            <Button type="primary" shape="round" size="middle" style={{paddingLeft: 2, marginLeft: 10}}>login</Button>
        )
    }

    const LogoutButton = () => {
        return (
            <Button
                type="primary"
                shape="round"
                size="middle"
                style={{paddingLeft: 2, marginLeft: 10}}
                icon={<LogoutOutlined/>}
                href={"/api/auth/logout"}
            >
                logout
            </Button>
        )
    }

    return (
        <div>
            <LoggedInUserContainer>
                <LoginContainer>
                    {!user &&
                        <>
                            <span>está esperando um genjutsu? <LoginCallToAction
                                href="/api/auth/login">faça login!</LoginCallToAction></span>
                        </>}
                </LoginContainer>
                <LogoutContainer>
                    {user &&
                        <>
                            <Avatar src={userAvatar} alt={userName} onClick={handleAvatarClick} />
                            <LogoutButton/>
                        </>
                    }
                </LogoutContainer>
            </LoggedInUserContainer>
        </div>
    );
}