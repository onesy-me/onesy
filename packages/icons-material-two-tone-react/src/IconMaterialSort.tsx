import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSort = (props: IIcon) => {

  return (
    <Icon
      name='Sort'

      short_name='Sort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
    </Icon>
  );
};

IconMaterialSort.displayName = 'OnesyIconMaterialSort';

export default IconMaterialSort;
