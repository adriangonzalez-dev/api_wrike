import express from 'express'
import { Environment } from '../config/environment';
import { apiWrike } from '../config/wrike_api';

interface Group {
    id: string,
    accountId: string,
    title: string,
    memberIds: Array<string>,
    childIds: Array<string>,
    parentIds: Array<string>,
    avatarUrl: string
}

interface GroupWithUsers {
    id: string,
    accountId: string,
    title: string,
    memberIds: Array<User>,
    childIds: Array<string>,
    parentIds: Array<string>,
    avatarUrl: string
}

interface Profile {
        accountId: string,
        email: string,
        role: string,
        external: string,
        admin: boolean,
        owner: boolean
}

interface User{
    id: string,
    firstName: string,
    lastName: string,
    type: string,
    profiles: Array<Profile>,
    avatarUrl: string,
    timezone: string,
    locale: string,
    deleted: boolean,
    title: string,
    companyName: string,
    phone: string,
    location: string,
    primaryEmail: string
}

interface ResponseApiGroup {
    kind: string,
    data: Array<Group>
}

export const getGroups = async ():Promise<Group[]> => {
    const {data} = await apiWrike.get('/groups')
    return data.data as Group[];
}

export const getGroupById = async (id:string):Promise<GroupWithUsers | []> => {
    try {
        const {data} = await apiWrike.get<ResponseApiGroup>(`/groups/${id}`)
        const group = data.data[0] as Group;
        const promiseUsers = group.memberIds.map(id => getUserById(id))
        const users = await Promise.all(promiseUsers)
        return {...group, memberIds: users} as GroupWithUsers
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getUserById = async (id:string):Promise<User> => {
    const {data} = await apiWrike.get(`/users/${id}`)
    return data.data[0] as User;
}