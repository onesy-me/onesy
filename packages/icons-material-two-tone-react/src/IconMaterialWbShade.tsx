import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbShade = (props: IIcon) => {

  return (
    <Icon
      name='WbShade'

      short_name='WbShade'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M14,12v2.5l5.5,5.5H22L14,12z M14,20h3l-3-3V20z M8,4l-6,6h2v10h8V10h2L8,4z M9,14H7v-4h2V14z"/></g></g>
    </Icon>
  );
};

IconMaterialWbShade.displayName = 'OnesyIconMaterialWbShade';

export default IconMaterialWbShade;
