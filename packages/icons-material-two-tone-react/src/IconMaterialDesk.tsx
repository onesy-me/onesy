import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesk = (props: IIcon) => {

  return (
    <Icon
      name='Desk'

      short_name='Desk'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" opacity=".3" width="4" x="16" y="8"/><rect height="2" opacity=".3" width="4" x="16" y="12"/><path d="M2,6v12h2V8h10v10h2v-2h4v2h2V6H2z M20,14h-4v-2h4V14z M20,10h-4V8h4V10z"/></g></g>
    </Icon>
  );
};

IconMaterialDesk.displayName = 'OnesyIconMaterialDesk';

export default IconMaterialDesk;
