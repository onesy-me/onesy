import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbnailBarW100 = (props: IIcon) => {

  return (
    <Icon
      name='ThumbnailBarW100'

      short_name='ThumbnailBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-25 0-42.5-17.5T132-272v-416q0-25 17.5-42.5T192-748h576q25 0 42.5 17.5T828-688v416q0 25-17.5 42.5T768-212H192Zm156-28h420q14 0 23-9t9-23v-416q0-14-9-23t-23-9H348v480Zm-28 0v-480H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h128Zm-160 0v-480 480Zm160 0h28-28Zm0-480h28-28Z"/>
    </Icon>
  );
};

IconMaterialThumbnailBarW100.displayName = 'OnesyIconMaterialThumbnailBarW100';

export default IconMaterialThumbnailBarW100;
