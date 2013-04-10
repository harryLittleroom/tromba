/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 * WARNING: This is generated code. Do not modify. Your changes *will* be lost.
 */

#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"

@implementation ApplicationDefaults

+ (NSMutableDictionary*) copyDefaults
{
	NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];
	
	[_property setObject:[TiUtils stringValue:@"y4uLuyWbw6fwqiXpcE3GFZRjNcPRcUZz"] forKey:@"acs-oauth-secret-production"];
	[_property setObject:[TiUtils stringValue:@"nxrHMGZ8baUgHPLEQYAsGjLIp3GRpiaI"] forKey:@"acs-oauth-key-production"];
	[_property setObject:[TiUtils stringValue:@"sQ77p2pEChxCospwR4ZyVBsds7iHhBHa"] forKey:@"acs-api-key-production"];
	[_property setObject:[TiUtils stringValue:@"xFLrnsKRHw52ZuvkQ9LKYNKu9eWlxfp6"] forKey:@"acs-oauth-secret-development"];
	[_property setObject:[TiUtils stringValue:@"gjvVKCOrfKU2JonBL1RIF2yCt7AGgsu4"] forKey:@"acs-oauth-key-development"];
	[_property setObject:[TiUtils stringValue:@"ndz5VxnCejfoC2q1WhMceB3ijTuIfiNG"] forKey:@"acs-api-key-development"];
	[_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];
	return _property;
}

@end