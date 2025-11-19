import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderInner = (props: IIcon) => {

  return (
    <Icon
      name='BorderInner'

      short_name='BorderInner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm320 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm-160 0v-80h80v80h-80ZM440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/>
    </Icon>
  );
};

IconMaterialBorderInner.displayName = 'OnesyIconMaterialBorderInner';

export default IconMaterialBorderInner;
