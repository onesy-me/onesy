import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRowsFilled = (props: IIcon) => {

  return (
    <Icon
      name='TableRowsFilled'

      short_name='TableRows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-17 0-28.5-11.5T120-160v-106q0-17 11.5-28.5T160-306h640q17 0 28.5 11.5T840-266v106q0 17-11.5 28.5T800-120H160Zm0-266q-17 0-28.5-11.5T120-426v-109q0-17 11.5-28.5T160-575h640q17 0 28.5 11.5T840-535v109q0 17-11.5 28.5T800-386H160Zm0-269q-17 0-28.5-11.5T120-695v-105q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800v105q0 17-11.5 28.5T800-655H160Z"/>
    </Icon>
  );
};

IconMaterialTableRowsFilled.displayName = 'OnesyIconMaterialTableRowsFilled';

export default IconMaterialTableRowsFilled;
