import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRefreshW100 = (props: IIcon) => {

  return (
    <Icon
      name='RefreshW100'

      short_name='Refresh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M484-212q-112.23 0-190.11-77.84-77.89-77.84-77.89-190T293.89-670q77.88-78 190.11-78 72 0 134 35.5t98 98.5v-134h28v188H556v-28h142q-31-61-88-96.5T484-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h30q-26 85-96.5 136.5T484-212Z"/>
    </Icon>
  );
};

IconMaterialRefreshW100.displayName = 'OnesyIconMaterialRefreshW100';

export default IconMaterialRefreshW100;
