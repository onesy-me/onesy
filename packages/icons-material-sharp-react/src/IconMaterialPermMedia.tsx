import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermMedia = (props: IIcon) => {

  return (
    <Icon
      name='PermMedia'

      short_name='PermMedia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-600h80v520h680v80H40Zm160-160v-600h280l80 80h360v520H200Zm80-80h560v-360H527l-80-80H280v440Zm0 0v-440 440Zm80-80h400L622-620l-92 120-62-80-108 140Z"/>
    </Icon>
  );
};

IconMaterialPermMedia.displayName = 'OnesyIconMaterialPermMedia';

export default IconMaterialPermMedia;
