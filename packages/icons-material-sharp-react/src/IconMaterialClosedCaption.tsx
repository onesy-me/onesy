import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClosedCaption = (props: IIcon) => {

  return (
    <Icon
      name='ClosedCaption'

      short_name='ClosedCaption'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-640h720v640H120Zm80-80h560v-480H200v480Zm40-120h200v-80h-60v20h-80v-120h80v20h60v-80H240v240Zm280 0h200v-80h-60v20h-80v-120h80v20h60v-80H520v240ZM200-240v-480 480Z"/>
    </Icon>
  );
};

IconMaterialClosedCaption.displayName = 'OnesyIconMaterialClosedCaption';

export default IconMaterialClosedCaption;
