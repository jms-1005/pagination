export interface Show{
  id:number;
  attributes:{
    ShowName: string;
  }
}

export interface Shows{
  data: Show[];
  meta: {
    pagination:{
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}
