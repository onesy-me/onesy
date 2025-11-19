import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDraftW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='DraftW100Filled'

      short_name='Draft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v449q0 26-17 43t-43 17H272Zm300-550q0 13 8.5 21.5T602-652h118L572-800v118Z"/>
    </Icon>
  );
};

IconMaterialDraftW100Filled.displayName = 'OnesyIconMaterialDraftW100Filled';

export default IconMaterialDraftW100Filled;
