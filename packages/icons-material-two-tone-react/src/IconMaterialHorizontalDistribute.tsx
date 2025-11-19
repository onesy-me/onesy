import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalDistribute = (props: IIcon) => {

  return (
    <Icon
      name='HorizontalDistribute'

      short_name='HorizontalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M4,22H2V2h2V22z M22,2h-2v20h2V2z M13.5,7h-3v10h3V7z"/>
    </Icon>
  );
};

IconMaterialHorizontalDistribute.displayName = 'OnesyIconMaterialHorizontalDistribute';

export default IconMaterialHorizontalDistribute;
