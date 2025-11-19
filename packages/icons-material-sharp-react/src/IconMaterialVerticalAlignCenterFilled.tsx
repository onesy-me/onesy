import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignCenterFilled = (props: IIcon) => {

  return (
    <Icon
      name='VerticalAlignCenterFilled'

      short_name='VerticalAlignCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-168l-64 64-56-56 160-160 160 160-56 56-64-64v168h-80ZM160-440v-80h640v80H160Zm320-120L320-720l56-56 64 64v-168h80v168l64-64 56 56-160 160Z"/>
    </Icon>
  );
};

IconMaterialVerticalAlignCenterFilled.displayName = 'OnesyIconMaterialVerticalAlignCenterFilled';

export default IconMaterialVerticalAlignCenterFilled;
