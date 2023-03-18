import {useUser} from "@auth0/nextjs-auth0/client";
import {Form} from "antd";
import {ProfilePageContainer} from "@/styles/profile.styles";

export default function Profile() {
    const {user, error, isLoading} = useUser();

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>{error.message}</div>;

    if (!user) return <div>Not logged in</div>;

    return (
        <ProfilePageContainer>
            <h1>Profile Info</h1>
            {user && (
                <Form
                    labelCol={{span: 8}}
                    wrapperCol={{span: 14}}
                    layout="horizontal"
                    size="middle"
                    name="profile"
                >
                    <Form.Item label="Name" name="Name">
                        <input type="text" defaultValue={user.name!}/>
                    </Form.Item>
                    <Form.Item label="Email">
                        <input type="text" defaultValue={user.email!}/>
                    </Form.Item>
                    <Form.Item label="Nickname">
                        <input type="text" defaultValue={user.nickname!}/>
                    </Form.Item>
                    <Form.Item label="Picture">
                        <input type="text" defaultValue={user.picture!}/>
                    </Form.Item>
                </Form>
            )}
        </ProfilePageContainer>
    );
}