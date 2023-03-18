import {Card} from "antd";
import Meta from "antd/es/card/Meta";

interface ShortcutCardProps {
    title: string;
    description: string;
    link: string;
    image?: string;
}

export default function ShortcutCard(props: ShortcutCardProps) {
    return (
        <Card
            hoverable
            style={{width: 240}}
            cover={<img alt="example" src={props.image}/>}
        >
            <Meta title={props.title} description={props.description}/>
        </Card>
    )
}