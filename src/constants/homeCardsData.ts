export interface IHomeCardsData {
  id: number
  title: string
  date: string
  progress: number
  achievement1?:boolean
  achievement2?:boolean
  achievement3?:boolean
}

export const HOME_CARDS_DATA: IHomeCardsData[] = [
  {
    id: 1,
    title: 'HITECH',
    date: '12.03.2021',
    progress: 150,
    achievement1:true
  },
  {
    id: 2,
    title: 'HITECH',
    date: '13.03.2021',
    progress: 750,
    achievement2:true
  },
  {
    id: 3,
    title: 'HITECH',
    date: '14.03.2021',
    progress: 1400,
    achievement1:true,
    achievement3:true
  },
]