import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalRule = (props: IIcon) => {

  return (
    <Icon
      name='HorizontalRule'

      short_name='HorizontalRule'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" fillRule="evenodd" height="24" width="24"/><g><rect fillRule="evenodd" height="2" width="16" x="4" y="11"/></g></g>
    </Icon>
  );
};

IconMaterialHorizontalRule.displayName = 'OnesyIconMaterialHorizontalRule';

export default IconMaterialHorizontalRule;
