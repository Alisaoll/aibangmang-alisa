import { request } from '_methods'
import { HOST } from '_config'

export const getHomeRanking = () => request.get(`${HOST}/home/ranking`)
export const getHomeHelp = () => request.get(`${HOST}/home/help`)
export const getHomeService = () => request.get(`${HOST}/home/service`)
export const getHomeNews = () => request.get(`${HOST}/home/news`)
