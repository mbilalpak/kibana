/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { Switch, Route } from 'react-router-dom';
import React, { memo } from 'react';
import { HostList } from './view';
import { MANAGEMENT_ROUTING_ENDPOINTS_PATH } from '../../common/constants';
import { NotFoundPage } from '../../../app/404';

/**
 * Provides the routing container for the endpoints related views
 */
export const EndpointsContainer = memo(() => {
  return (
    <Switch>
      <Route path={MANAGEMENT_ROUTING_ENDPOINTS_PATH} exact component={HostList} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});

EndpointsContainer.displayName = 'EndpointsContainer';
