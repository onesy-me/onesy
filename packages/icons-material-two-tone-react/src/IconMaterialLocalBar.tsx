import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalBar = (props: IIcon) => {

  return (
    <Icon
      name='LocalBar'

      short_name='LocalBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.23 9L12 12.11 14.77 9z" opacity=".3"/><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM5.66 5h12.69l-1.78 2H7.43L5.66 5zM12 12.11L9.23 9h5.54L12 12.11z"/>
    </Icon>
  );
};

IconMaterialLocalBar.displayName = 'OnesyIconMaterialLocalBar';

export default IconMaterialLocalBar;
