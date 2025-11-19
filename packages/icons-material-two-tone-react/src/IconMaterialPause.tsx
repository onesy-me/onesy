import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPause = (props: IIcon) => {

  return (
    <Icon
      name='Pause'

      short_name='Pause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 5h4v14H6zm8 0h4v14h-4z"/>
    </Icon>
  );
};

IconMaterialPause.displayName = 'OnesyIconMaterialPause';

export default IconMaterialPause;
