import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusPencil = (props: IIcon) => {

  return (
    <Icon
      name='StylusPencil'

      short_name='StylusPencil'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-320 200-520h80l200 520H240Zm116-80h248L480-721 356-400Zm0 0h248-248ZM160-120l40-120h560l40 120H160Z"/>
    </Icon>
  );
};

IconMaterialStylusPencil.displayName = 'OnesyIconMaterialStylusPencil';

export default IconMaterialStylusPencil;
