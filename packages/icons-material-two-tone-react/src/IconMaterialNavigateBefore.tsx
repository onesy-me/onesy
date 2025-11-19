import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigateBefore = (props: IIcon) => {

  return (
    <Icon
      name='NavigateBefore'

      short_name='NavigateBefore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/>
    </Icon>
  );
};

IconMaterialNavigateBefore.displayName = 'OnesyIconMaterialNavigateBefore';

export default IconMaterialNavigateBefore;
