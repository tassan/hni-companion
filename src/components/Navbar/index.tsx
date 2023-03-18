import {
    Logo,
    MenuContainer,
    MenuItem,
    MenuItemContainer,
    MenuLink,
    NavbarContainer
} from "@/components/Navbar/styles";
import {UserProfile, useUser} from "@auth0/nextjs-auth0/client";
import {Button} from "antd";
import React from "react";
import {LoginOutlined, LogoutOutlined} from "@ant-design/icons";

export default function Navbar() {
    const {user} = useUser();

    const LoginButton = ({user}:UserProfile) => {

        const buttonText = user ? "Sair" : "Entrar";
        const buttonHref = user ? "api/auth/logout" : "api/auth/login";
        const buttonIcon = user ? <LogoutOutlined /> : <LoginOutlined />;
        return (
            <Button
                type="primary"
                href={buttonHref}
                icon={buttonIcon}
            >
                {buttonText}
            </Button>
        );
    }

    return (
        <NavbarContainer>
            <Logo>HNI</Logo>
            <MenuContainer>
                <MenuItemContainer>
                    <MenuItem>
                        <MenuLink href="/">Ínicio</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/profile">Perfil</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/characters">Personagens</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/missions">Missões</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="/events">Eventos</MenuLink>
                    </MenuItem>
                    <LoginButton user={user} />
                </MenuItemContainer>
            </MenuContainer>
        </NavbarContainer>
    );
}