import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusPencilFilled = (props: IIcon) => {

  return (
    <Icon
      name='StylusPencilFilled'

      short_name='StylusPencil'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-320 200-520h80l200 520H240Zm-80 200 40-120h560l40 120H160Z"/>
    </Icon>
  );
};

IconMaterialStylusPencilFilled.displayName = 'OnesyIconMaterialStylusPencilFilled';

export default IconMaterialStylusPencilFilled;
