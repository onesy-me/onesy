import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoteFilled = (props: IIcon) => {

  return (
    <Icon
      name='NoteFilled'

      short_name='Note'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h10l6 6v14Zm9-13h5l-5-5Z"/>
    </Icon>
  );
};

IconMaterialNoteFilled.displayName = 'OnesyIconMaterialNoteFilled';

export default IconMaterialNoteFilled;
