import { ObjectID } from 'mongodb';

export const mapToObjectId = (ids: string[]) => ids.map(id => new ObjectID(id));

export const getInviteCode = () =>
  Math.floor(Math.random() * 100000).toString();
