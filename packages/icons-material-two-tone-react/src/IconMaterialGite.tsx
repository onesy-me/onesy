import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGite = (props: IIcon) => {

  return (
    <Icon
      name='Gite'

      short_name='Gite'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M4,12h10v5H4V12z M20,17h-4v-6.17l2-2v0l2,2V17z" opacity=".3"/><path d="M18,6H9V4H7v2H6l-4,4v9h20v-9L18,6z M4,12h10v5H4V12z M20,17h-4v-6.17l2-2v0l2,2V17z"/>
    </Icon>
  );
};

IconMaterialGite.displayName = 'OnesyIconMaterialGite';

export default IconMaterialGite;
