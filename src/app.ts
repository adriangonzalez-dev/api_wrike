import express from 'express'
import { Environment } from './config/environment';
import { apiWrike } from './config/wrike_api';

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

(async ()=> {
    /* const {data} = await apiWrike.get('/folders?plainTextCustomFields=true')
    console.log(data.data[400]) */
    const {data} = await apiWrike.get('/folders/IEADNB5OI4TDMIPV')
    const resp = data.data.filter((item:Space) => item.title == 'McDonalds')
    console.log(resp)

    /* const {data} = await apiWrike.get('/spaces/IEADNB5OI4OKKNPE/tasks')
    console.log(data.data.filter((item:Task)=>item.title.includes('[CONTENIDO][PA]'))) */
})()