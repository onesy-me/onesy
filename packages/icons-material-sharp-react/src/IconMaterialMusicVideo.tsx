import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicVideo = (props: IIcon) => {

  return (
    <Icon
      name='MusicVideo'

      short_name='MusicVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-280q42 0 71-29t29-71v-220h120v-80H480v220q-13-9-28-14.5t-32-5.5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialMusicVideo.displayName = 'OnesyIconMaterialMusicVideo';

export default IconMaterialMusicVideo;
