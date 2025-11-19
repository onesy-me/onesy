import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqualizer = (props: IIcon) => {

  return (
    <Icon
      name='Equalizer'

      short_name='Equalizer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z"/>
    </Icon>
  );
};

IconMaterialEqualizer.displayName = 'OnesyIconMaterialEqualizer';

export default IconMaterialEqualizer;
