import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIncompleteCircle = (props: IIcon) => {

  return (
    <Icon
      name='IncompleteCircle'

      short_name='IncompleteCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12c0-2.76,1.12-5.26,2.93-7.07L12,12V2C17.52,2,22,6.48,22,12z"/>
    </Icon>
  );
};

IconMaterialIncompleteCircle.displayName = 'OnesyIconMaterialIncompleteCircle';

export default IconMaterialIncompleteCircle;
