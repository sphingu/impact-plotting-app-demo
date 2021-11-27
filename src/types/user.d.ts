export type IUser = {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
  location: {
    coordinates: {
      latitude: string;
      longitude: string;
    }
  }
}

export type IUserList = {
  results: IUser[]
}