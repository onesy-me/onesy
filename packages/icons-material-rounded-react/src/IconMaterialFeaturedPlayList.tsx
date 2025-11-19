import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeaturedPlayList = (props: IIcon) => {

  return (
    <Icon
      name='FeaturedPlayList'

      short_name='FeaturedPlayList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440h280q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H280q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440Zm0-120h280q17 0 28.5-11.5T600-600q0-17-11.5-28.5T560-640H280q-17 0-28.5 11.5T240-600q0 17 11.5 28.5T280-560ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialFeaturedPlayList.displayName = 'OnesyIconMaterialFeaturedPlayList';

export default IconMaterialFeaturedPlayList;
