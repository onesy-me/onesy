import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeaturedVideo = (props: IIcon) => {

  return (
    <Icon
      name='FeaturedVideo'

      short_name='FeaturedVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h280q17 0 28.5-11.5T560-440v-200q0-17-11.5-28.5T520-680H240q-17 0-28.5 11.5T200-640v200q0 17 11.5 28.5T240-400Zm-80 240q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialFeaturedVideo.displayName = 'OnesyIconMaterialFeaturedVideo';

export default IconMaterialFeaturedVideo;
