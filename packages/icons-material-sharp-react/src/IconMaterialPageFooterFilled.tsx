import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageFooterFilled = (props: IIcon) => {

  return (
    <Icon
      name='PageFooterFilled'

      short_name='PageFooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h720v80H120Zm0-160v-560h720v560H120Z"/>
    </Icon>
  );
};

IconMaterialPageFooterFilled.displayName = 'OnesyIconMaterialPageFooterFilled';

export default IconMaterialPageFooterFilled;
