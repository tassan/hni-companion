import React from 'react';
import {UserProfile, useUser} from '@auth0/nextjs-auth0/client';

export default function Profile() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    const ProfileImage = (user: UserProfile) => {
        const source = user.picture ?? "https://via.placeholder.com/150";
        const alt = user.name ?? "User Image";

        return <img src={source} alt={alt} />
    }

    return (
        <div>
            <h1>Profile</h1>
            <ProfileImage {...user} />
            <p>{user?.name}</p>
            <p>{user?.email}</p>
        </div>
    );
}