import { PostDto } from '@interfaces/post.dto';
import { ProfileDto } from '@interfaces/profile.dto';
import { GuildDto } from '@interfaces/guild.dto';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Game: { id: number };
    }
  }
}
