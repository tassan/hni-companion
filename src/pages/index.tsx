import React from "react";
import {HomeContainer} from "@/styles/home.styles";
import {Card, Image} from "antd";
import {useRouter} from "next/router";

export default function Home() {
    let router = useRouter();

    return (
        <HomeContainer>
            <Card
                hoverable
                style={{width: 500, marginBottom: 20}}
                cover={<Image src="https://i.imgur.com/GrHJkIK.png" alt="fanart of naruto" width={500} height={125}/>}
                onClick={() => router.push("/characters")}
            >
                <Card.Meta
                    title="Personagens"
                    description="Lista de personagens"
                />
            </Card>
            <Card
                hoverable
                style={{width: 500, marginBottom: 20}}
                cover={<Image src="https://i.imgur.com/8frsXDH.png" alt="fanart of naruto" width={500} height={125}/>}
                onClick={() => router.push("/missions")}
            >
                <Card.Meta
                    title="Missões"
                    description="Lista de missões"
                />
            </Card>
            <Card
                hoverable
                style={{width: 500, marginBottom: 20}}
                cover={<Image src="https://i.imgur.com/rG1TWhR.png" alt="fanart of naruto" width={500} height={125}/>}
                onClick={() => router.push("/events")}
            >
                <Card.Meta
                    title="Eventos"
                    description="Lista de eventos"
                />
            </Card>
        </HomeContainer>
    )
}
