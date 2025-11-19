import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLapsW100 = (props: IIcon) => {

  return (
    <Icon
      name='LapsW100'

      short_name='Laps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-182-20-19 90-90h-70q-95 0-161.5-67T132-520q0-95 66.5-161.5T360-748h240q95 0 161.5 66.5T828-520q0 95-66.5 162T600-291v-28q84 0 142-58.5T800-520q0-84-58-142t-142-58H360q-84 0-142 58t-58 142q0 84 58 142.5T360-319h70l-89-90 19-19 123 123-123 123Z"/>
    </Icon>
  );
};

IconMaterialLapsW100.displayName = 'OnesyIconMaterialLapsW100';

export default IconMaterialLapsW100;
