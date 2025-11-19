import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClearAll = (props: IIcon) => {

  return (
    <Icon
      name='ClearAll'

      short_name='ClearAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z"/>
    </Icon>
  );
};

IconMaterialClearAll.displayName = 'OnesyIconMaterialClearAll';

export default IconMaterialClearAll;
