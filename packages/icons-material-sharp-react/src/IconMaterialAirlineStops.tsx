import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineStops = (props: IIcon) => {

  return (
    <Icon
      name='AirlineStops'

      short_name='AirlineStops'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200v-80h80q-15-138-118-229T80-600v-80q129 0 237 68t163 184q38-81 100-143.5T719-680H560v-80h280v280h-80v-132q-93 57-160 141t-80 191h80v80H360Z"/>
    </Icon>
  );
};

IconMaterialAirlineStops.displayName = 'OnesyIconMaterialAirlineStops';

export default IconMaterialAirlineStops;
