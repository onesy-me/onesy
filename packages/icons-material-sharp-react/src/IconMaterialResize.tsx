import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResize = (props: IIcon) => {

  return (
    <Icon
      name='Resize'

      short_name='Resize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-600v-160H600v-80h240v240h-80ZM120-120v-240h80v160h160v80H120Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z"/>
    </Icon>
  );
};

IconMaterialResize.displayName = 'OnesyIconMaterialResize';

export default IconMaterialResize;
