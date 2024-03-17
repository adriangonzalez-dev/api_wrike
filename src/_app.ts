import express from 'express'
import { Environment } from './config/environment';
import { apiWrike } from './config/wrike_api';
import { getGroupById, getGroups } from './services/groupsUsers';
import { findSpaceByName, getFolders, getSpaces } from './services/spacesFolders';
import { getDB } from './services/getDB';
import { loginWrike } from './services/auth';

interface Space {
    id: string,
    title: string,
    avatarUrl: string,
    accessType: string,
    archived: boolean,
    guestRoleId: string,
    defaultProjectWorkflowId: string,
    defaultTaskWorkflowId: string
}

interface Task{
    id: string,
    accountId: string,
    title: string,
    status: string,
    importance: string,
    createdDate: string,
    updatedDate: string,
    completedDate: string,
    dates: { type: string },
    scope: string,
    customStatusId: string,
    permalink: string,
    priority: string
  }

/* (async ()=> { */
    /* const {data} = await apiWrike.get('/folders?plainTextCustomFields=true')
    console.log(data.data[400]) */
/*     const {data} = await apiWrike.get('/users/KUAQT76L')
    const resp = data.data.filter((item:Space) => item.title == 'McDonalds')
    console.log(data.data) */

    /* const {data} = await apiWrike.get('/spaces/IEADNB5OI4OKKNPE/tasks')
    console.log(data.data.filter((item:Task)=>item.title.includes('[CONTENIDO][PA]'))) */
/* })() */

(async ()=>{
    const data = await getDB()
    console.log(data)
})()